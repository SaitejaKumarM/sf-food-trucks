package com.example.backenddemo.controller.food;

import com.example.backenddemo.model.FoodDTO;
import com.example.backenddemo.service.IFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
* /api/food 相关接口
* */
@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private IFoodService foodService;

    /* 返回food列表 */
    @GetMapping("/list")
    public List<FoodDTO> list(){
        return foodService.list();
    }
}
