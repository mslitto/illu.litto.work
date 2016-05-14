.PHONY: \
	all \
	build \
	dev

all: dev

clean:
	rm -r ./out

build:
	gulp build

dev:
	gulp
