import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090"); // Android emulator için özel IP
// const pb = new PocketBase("http://10.0.2.2:8090"); // Android emulator için özel IP
export default pb;
