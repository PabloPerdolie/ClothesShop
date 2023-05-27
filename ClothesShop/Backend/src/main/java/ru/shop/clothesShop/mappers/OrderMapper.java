package ru.shop.clothesShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.clothesShop.dto.OrderDTO;
import ru.shop.clothesShop.entites.Order;

@Mapper(uses = {CustomerMapper.class, ProductMapper.class})
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    OrderDTO convertOrderToOrderDTO(Order order);

}
