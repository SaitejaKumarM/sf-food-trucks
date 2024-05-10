package com.example.backenddemo.service.impl;

import com.example.backenddemo.model.FoodDTO;
import com.example.backenddemo.service.IFoodService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements IFoodService {

    /* food列表方法 */
    @Override
    public List<FoodDTO> list() {
        try{
            // todo: 此处处理csv文件，可提供通用工具类解析csv本地文件或网络文件
            return List.of();
        }catch (Exception e){
            throw new RuntimeException(e);
        }

    }
}
