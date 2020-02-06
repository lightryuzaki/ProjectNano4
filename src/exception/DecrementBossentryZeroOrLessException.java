package exception;

public class DecrementBossentryZeroOrLessException extends RuntimeException {
    public DecrementBossentryZeroOrLessException(String message) {
        super(message);
    }
}