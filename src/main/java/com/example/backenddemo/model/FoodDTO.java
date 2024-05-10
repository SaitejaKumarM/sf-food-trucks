package com.example.backenddemo.model;

import com.fasterxml.jackson.databind.ser.Serializers;

public class FoodDTO extends Serializers.Base {
    /** 位置id **/
    private Long locationId;

    /** 描述信息 **/
    private String application;

    /** cnn **/
    private Integer cnn;

    /** todo: 省略其他属性声明 **/

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public String getApplication() {
        return application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public Integer getCnn() {
        return cnn;
    }

    public void setCnn(Integer cnn) {
        this.cnn = cnn;
    }
}
