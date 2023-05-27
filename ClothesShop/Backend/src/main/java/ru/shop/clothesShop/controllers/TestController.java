package ru.shop.clothesShop.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shop.clothesShop.entites.Customer;
import ru.shop.clothesShop.repositories.CustomerRepository;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TestController {
    @GetMapping("/test")
    public String test() {
        return "Hello, from secured part";
    }

    private final CustomerRepository customerRepository;

    @GetMapping("/people")
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }
}
