JEKYLL = docker run -ti --rm -v "$(shell pwd):/srv/jekyll" --volume="$(shell pwd)/vendor/bundle:/usr/local/bundle" -p 4000:4000 -p 35729:35729 jekyll/minimal:pages

.PHONY: help
help:
	@echo "make help	- show this help message"
	@echo "make install	- install dependencies"
	@echo "make update	- update dependencies"
	@echo "make start	- builds and runs the project, autoreloading on file changes"


.PHONY: install
install:
	@${JEKYLL} bundle install

.PHONY: update
update:
	@${JEKYLL} bundle update

.PHONY: start
start:
	@${JEKYLL} jekyll serve --livereload
