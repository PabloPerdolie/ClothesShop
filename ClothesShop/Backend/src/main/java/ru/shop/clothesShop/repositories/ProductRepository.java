package ru.shop.clothesShop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shop.clothesShop.entites.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
}
