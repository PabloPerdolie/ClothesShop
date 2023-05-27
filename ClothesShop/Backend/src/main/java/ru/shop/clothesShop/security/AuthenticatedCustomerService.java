package ru.shop.clothesShop.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.shop.clothesShop.entites.Customer;


@Service
public class AuthenticatedCustomerService {
    public Customer getAuthenticatedCustomer() {
        CustomerDetails customerDetails = (CustomerDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return customerDetails.getCustomer();
    }
}
