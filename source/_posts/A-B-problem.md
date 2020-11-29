---
title: A+B problem
date: 2020-11-21 19:13:53
tags: solve
---

## 题意

给出两个整数 a 和 b ，求出两个整数的和。

## 题解

### 思路

首先，我们知道求两个数的和可以用 C++ 的 `+` 符号。

那么，我们首先要输入 a 和 b ，然后直接调用 `+` 号，求出 a 与 b 的和并输出即可。

### 代码

```cpp
#include<bits/stdc++.h>//万能头文件
using namespace std;
int main(){
    int a,b;//定义a与b
    scanf("%d%d",&a,&b);//输入a与b
    printf("%d\n",a+b);//计算a+b并输出
    return 0;//结束程序
}
```