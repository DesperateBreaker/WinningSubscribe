# WinningSubscribe

## 项目简介
TODO

## 部署

### 虚拟环境配置

- 安装 virtualenv
	```
	pip install virtualenv			-- 可切换国内镜像源安装
	```
- 创建虚拟环境，一般放在根目录下的 envs 文件夹
	```
	mkdir /envs
	cd /envs
	virtualenv wingamesubscribe		-- wingamesubscribe: 环境名称
	```
- 激活虚拟环境
	```
	source /envs/wingamesubscribe/bin/activate			-- 可以在根目录下执行
	```

### 安装 Flask

激活虚拟环境后，安装 Flask：

```
pip install flask
```

### uWsgi 配置

激活虚拟环境后，安装配置 uWSGI

- 安装 uWSGI
	```
	pip install uwsgi
	```
- 基于 uwsgi 运行 flask 项目
   
	这里使用配置文件的方式，配置文件路径 /backend/wingamesubscribe_uwsgi.ini
	```
	source /envs//wingamesubscribe/bin/activate
	uwsgi --ini wingamesubscribe_uwsgi.ini	（进入本文件目录后执行 加空格&可后台运行）
	```

停止 uwsgi：非后台时，直接 ctrl + c，后台时，按照以下查找 pid 并 kill 进程
```
ps -ef|grep wingamesubscribe_uwsgi   -- 查找pid
kill -9 pid							 -- 结束进程
```

### Nginx

按下列步骤进行安装和配置

- 安装
  ```
  yum install nginx -y 或 sudo apt install nginx			-- 任意位置
  ```

- 配置
	
	nginx 的默认配置文件路径  /etc/nginx/nginx.conf，本项目的配置文件路径 /backend/nginx.conf

	可将默认配置的备份后，将本项目的配置文件复制到 /etc/nginx/nginx.conf，然后重启 nginx

	```
	cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
	cp /backend/nginx.conf /etc/nginx/nginx.conf
	systemctl restart nginx
	```

Nginx 一些操作命令：
	
```
systemctl start nginx			-- 启动
systemctl stop nginx			-- 停止
systemctl restart nginx			-- 重启
systemctl status nginx			-- 查看状态
systemctl enable nginx			-- 开机自启
cat /var/log/nginx/error.log	-- 查看错误日志
```

配置时如果失败

进入默认配置文件路径， 删除默认的 nginx.conf
```
cd /etc/nginx/
rm nginx.conf
```
新建 nginx.conf  + 内容拷贝 + 保存
```
vim nginx.conf			-- 创建并打开文件
i                 		-- 进入编辑模式
......					-- 拷贝粘贴内容		
ESC						-- 按 ESC 退出编辑模式
:wq						-- 保存退出
cat nginx.conf			-- 查看文件内容
```
