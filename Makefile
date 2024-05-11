.PHONY: build infrastructure schema seed run unit-tests integration-tests push clean

build:
	@docker-compose build

infrastructure:
	# creates the containers for infrastructure dependencies

schema: build infrastructure
	# updates infrastructure databases schemas (if needed)

seed: build schema
	# seeds the databases with fake data (if needed)

run: seed
	@docker-compose up -d service

unit-tests: build
	@docker-compose up --exit-code-from unit-tests unit-tests

integration-tests: run
	# runs application integration tests

push: build
	# pushes the created images to the registry

clean:
	@docker-compose down
