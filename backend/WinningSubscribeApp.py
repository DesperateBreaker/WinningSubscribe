from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/submit', methods=['POST'])
def submit():
    # 接收前端发送的JSON数据
    data = request.json

    # 假设我们在这里处理数据，例如验证期号和号码的有效性
    # 这里我们只是简单地返回一个成功的响应
    response = {
        'lotto': {
            'success': True,
            'message': 'Lotto 提交成功'
        },
        'ball': {
            'success': True,
            'message': 'Ball 提交成功'
        }
    }

    return jsonify(response)


if __name__ == '__main__':
    print("begin")
    app.run(debug=True, port=8000)
