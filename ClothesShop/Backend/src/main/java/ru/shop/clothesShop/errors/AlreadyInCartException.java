package ru.shop.clothesShop.errors;

public class AlreadyInCartException extends Exception {
    public AlreadyInCartException(String m) {
        super(m);
    }
}
