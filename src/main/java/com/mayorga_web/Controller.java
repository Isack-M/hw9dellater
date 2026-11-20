package com.mayorga_web;

import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Controller {
    @RequestMapping("hello")
    public String helloController() {
        return "<div style='text-align: center; margin-top: 3rem;'>" + "<img src= 'pics/staring_fish.jpg'>";   
    }
    
}
