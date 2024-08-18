# WinningSubscribe

## 基于 uwsgi 运行 flask 项目

- 使用命令方式
- 使用配置文件(推荐)

source /envs//wingamesubscribe/bin/activate
uwsgi --ini wingamesubscribe_uwsgi.ini（进入项目目录 加空格&可后台运行）

- 停止
ps -ef|grep wingamesubscribe_uwsgi   -- 查找pid
kill -9 pid							 -- 结束进程				

