def format_datetime(value, fmt='%Y년 %m월 %d일 %H:%M'):
    return value.strftime(fmt)

def char_limit(value):
    if len(value) > 50:
        return value[:50] + '...'
    else:
        return value