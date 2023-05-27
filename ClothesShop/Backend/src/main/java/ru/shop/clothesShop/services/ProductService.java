package ru.shop.clothesShop.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shop.clothesShop.entites.Product;
import ru.shop.clothesShop.repositories.ProductRepository;


import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findOne(long id) {
        return productRepository.findById(id).orElse(null);
    }

    public void save(Product product) {
        productRepository.save(product);
    }

    public void delete(long id) {
        productRepository.delete(findOne(id));
    }

}
