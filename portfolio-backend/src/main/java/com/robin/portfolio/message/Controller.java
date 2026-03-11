
package com.robin.portfolio.message;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    private MessageService service;

    @PostMapping("/send")
    public void messagesave(@RequestBody Dto dto) {
        service.SaveMessage(dto);
    }
}
