package exception;

public class ZeroRowsFetchedException extends RuntimeException {
    public ZeroRowsFetchedException(String message) {
        super(message);
    }
}