package ru.shop.clothesShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.clothesShop.dto.ProductImageDTO;
import ru.shop.clothesShop.entites.ProductImage;


@Mapper
public interface ProductImageMapper {
    ProductImageMapper INSTANCE = Mappers.getMapper(ProductImageMapper.class);

    ProductImageDTO convertProductImageToProductImageDTO(ProductImage productImage);
}
