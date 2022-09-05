from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flaskext.markdown import Markdown

import config

naming_convention = {
    "ix": "ix_%(column_0_lable)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(column_0_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

# 객체를 create_app 함수 안에서 선언하면 블루프린트 같은 다른 모듈에서 불러올 수 없음 -> 전역 변수로 생성
db = SQLAlchemy(metadata=MetaData(naming_convention=naming_convention))
migrate = Migrate()

def create_app():
    # 플라스크 애플리케이션을 생성.
    # __name__ 변수에 모듈명이 담김. 즉, 여기서는 pybo.py 모듈이 실행되는 것이므로 이 변수에 'pybo'라는 문자열이 담김.
    app = Flask(__name__)
    app.config.from_object(config)

    # # @app.route는 특정 주소에 접속하면 바로 다음 줄에 있는 함수를 호출하는 플라스크의 데코레이터
    # @ app.route('/')
    # def hello_pybo():
    #     return 'hello pybo!'

    # ORM(Object Relational Mapping)
    db.init_app(app)
    if app.config['SQLALCHEMY_DATABASE_URI'].startswith("sqlite"):
        migrate.init_app(app, db, render_as_batch=True)
    else:
        migrate.init_app(app, db)
    from . import models    # migrate 객체가 models.py 파일을 참조하게 함.

    from .views import main_views, question_views, answer_views, auth_views, comment_views, vote_views
    app.register_blueprint(main_views.bp)   # 블루프린트 객체 bp 등록
    app.register_blueprint(question_views.bp)   # 블루프린트 객체 bp 등록
    app.register_blueprint(answer_views.bp)   # 블루프린트 객체 bp 등록
    app.register_blueprint(auth_views.bp)   # 블루프린트 객체 bp 등록
    app.register_blueprint(comment_views.bp)   # 블루프린트 객체 bp 등록
    app.register_blueprint(vote_views.bp)  # 블루프린트 객체 bp 등록

    # 필터
    from .filter import format_datetime, char_limit
    app.jinja_env.filters['datetime'] = format_datetime # datetime이라는 이름으로 필터 등록
    app.jinja_env.filters['charlimit'] = char_limit # charlimit이라는 이름으로 필터 등록

    # markdown
    Markdown(app, extentions=['nl2br', 'fenced_code'])
    # extension은 확장기능
    #   nl2br은 줄바꿈 문자를 <br>로 바꿔줌
    #   fenced_code는 코드 표시 기능을 위해

    return app