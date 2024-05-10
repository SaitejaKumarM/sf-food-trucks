package com.example.backenddemo.service;

import com.example.backenddemo.model.FoodDTO;

import java.util.List;

/*
* 获取food列表方法
* @params todo: page, pageSize, keywords
* @return 返回列表数据
* */
public interface IFoodService {
    public List<FoodDTO> list();
}
