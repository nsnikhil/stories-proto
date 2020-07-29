setup:
	go get -u google.golang.org/protobuf/cmd/protoc-gen-go
	go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc

update-go-proto:
	./bin/protoc --proto_path=proto --go_out=proto api.proto
	./bin/protoc --proto_path=proto --go-grpc_out=proto api.proto

update-js-proto:
	./bin/protoc --proto_path=proto --js_out=import_style=commonjs:proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:proto api.proto

update-protos: update-go-proto update-js-proto