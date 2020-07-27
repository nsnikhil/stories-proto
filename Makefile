update-go-proto:
	./bin/protoc --proto_path=proto --go_out=plugins=grpc:proto api.proto

update-js-proto:
	./bin/protoc --proto_path=proto --js_out=import_style=commonjs:proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:proto api.proto

update-protos: update-go-proto update-js-proto