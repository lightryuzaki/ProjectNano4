package exception;

public class UpdatedRowCountMismatchException extends RuntimeException {
    public UpdatedRowCountMismatchException(String message) {
        super(message);
    }
}