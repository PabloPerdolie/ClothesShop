package ru.shop.clothesShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.clothesShop.dto.CustomerDTO;
import ru.shop.clothesShop.entites.Customer;


@Mapper
public interface CustomerMapper {
    CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);
    CustomerDTO convertCustomerToCustomerDTO(Customer customer);
}
