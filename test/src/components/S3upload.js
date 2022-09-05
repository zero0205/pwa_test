import React, { useState } from "react";
import AWS from "aws-sdk";
import { Row, Col, Button, Input, Alert } from "reactstrap";

export function S3upload() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // S3 정보 설정
  const ACCESS_KEY = "";
  const SECRET_ACCESS_KEY = "";
  const REGION = "ap-northeast-2";
  const S3_BUCKET = "tmibucket";

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  // 파일 선택시 function
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    // 아무 파일도 입력하지 않았을때 처리 필요
    if (file != null) {
      const fileExt = file.name.split(".").pop();

      if (file.type !== "image/jpeg" || fileExt !== "jpg") {
        alert("jpg 파일만 Upload 가능합니다.");
        return;
      }
      setProgress(0);
      setSelectedFile(e.target.files[0]);
    }
  };

  // upload 버튼 클릭 시 함수
  const uploadBtnClicked = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: "upload/" + file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          setSelectedFile(null);
        }, 3000);
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };
  return (
    <div>
      <div>
        <Row>
          <Col>
            <h1>File Upload</h1>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            {showAlert ? (
              <Alert color="primary">업로드 진행률 : {progress}%</Alert>
            ) : (
              <Alert color="primary">파일을 선택해 주세요.</Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Input color="primary" type="file" onChange={handleFileInput} />
            {selectedFile ? (
              <Button
                color="primary"
                onClick={() => uploadBtnClicked(selectedFile)}
              >
                {" "}
                Upload to S3
              </Button>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
}
