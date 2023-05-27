package ru.shop.clothesShop.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.shop.clothesShop.dto.ProductDTO;
import ru.shop.clothesShop.entites.Customer;
import ru.shop.clothesShop.errors.AlreadyInCartException;
import ru.shop.clothesShop.mappers.ProductMapper;
import ru.shop.clothesShop.security.AuthenticatedCustomerService;
import ru.shop.clothesShop.services.CartService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cart")
public class CartController {

    private final AuthenticatedCustomerService authenticatedCustomerService;
    private final ProductMapper productMapper = ProductMapper.INSTANCE;
    private final CartService cartService;

    @GetMapping
    public List<ProductDTO> getCart() {
        Customer customer = authenticatedCustomerService.getAuthenticatedCustomer();
        return cartService.findCartByPerson(customer.getId()).stream().
                map(productMapper::convertProductToProductDTO).collect(Collectors.toList());
    }

    @GetMapping("/in_cart/{id}")
    public Boolean isItemInCart(@PathVariable("id") long productId) {
        Customer customer = authenticatedCustomerService.getAuthenticatedCustomer();
        return cartService.isInCart(customer.getId(), productId) != null;
    }

    @PostMapping("/add/{id}")
    public void add(@PathVariable("id") long productId) throws AlreadyInCartException {
        Customer customer = authenticatedCustomerService.getAuthenticatedCustomer();
        if (!isItemInCart(productId))
            cartService.addItemToCart(customer.getId(), productId);
        else throw new AlreadyInCartException("Product already in cart");
    }

    @PostMapping("/delete/{id}")
    public void remove(@PathVariable("id") long productId) {
        Customer customer = authenticatedCustomerService.getAuthenticatedCustomer();
        cartService.removeItemFromCart(customer.getId(), productId);
    }

}
