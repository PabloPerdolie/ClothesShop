package ru.shop.clothesShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.clothesShop.dto.NewProductDTO;
import ru.shop.clothesShop.dto.ProductDTO;
import ru.shop.clothesShop.entites.Product;


@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductDTO convertProductToProductDTO(Product product);

    Product convertProductDTOToProduct(ProductDTO productDTO);

    Product convertNewProductDTOToProduct(NewProductDTO newProductDTO);
}
