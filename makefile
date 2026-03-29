# ビルド
build:
	docker compose build

# ビルド（キャッシュなし）
build_no_cache:
	docker compose build --no-cache

# 起動
up:
	docker compose up --build

upd: 
	docker compose up -d --build

# 再起動
re:
	docker compose restart

# 停止
down:
	docker compose down --remove-orphans

# コンテナ内に入る
sh:
	docker compose exec app bash
