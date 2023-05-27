package ru.shop.clothesShop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shop.clothesShop.entites.ProductImage;


public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
