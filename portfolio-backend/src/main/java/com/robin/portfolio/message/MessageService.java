
package com.robin.portfolio.message;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class MessageService {

    @Autowired
    private MessageRepository repo;

    public void SaveMessage(Dto dto) {
        Model model = new Model();
        model.setFullname(dto.getFullname());
        model.setEmail(dto.getEmail());
        model.setProjectdetails(dto.getProjectdetails());
        repo.save(model);
    }

}
