// main.js

/*
// 전체 가져오기
import * as md from "./module.js";
md.module("module ~~~");
md.module1("module run!!!");

// 필요한 것만 가져오기
import { module, module1 } from "./module.js";
module("module ~~~");
module1("module run!!!");
========================================*/

//app.html 실행 => 콘솔창
import {movie1} from "../promise_await.js";
movie1();


//1. moduleArray.js 모듈을 import
import {totalPoint} from "./moduleArray.js";

//2. 함수 실행
let result = totalPoint();
console.log(result);
