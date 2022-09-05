from flask import Blueprint, url_for
from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix='/')    # 블루프린트 객체 생성


@bp.route('/hello')
def hello_pybo():
    return 'hello, pybo!!'

@bp.route('/')
def index():
    return redirect(url_for('question._list'))   # url_for 함수는 라우트가 설정된 함수명으로 URL을 역으로 찾아줌
