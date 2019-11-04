package StringManipulation;

public class StringManipulationTest {
    public static void main(String[] args) {
        StringManipulation concat = new StringManipulation();
        String output = concat.trimAndConcat("   Hello    ", "   World   ");
        System.out.println(output);
        StringManipulation index = new StringManipulation();

        char letter = 'o';
        Integer a = index.getIndexOrNull("Coding", letter);
        Integer b = index.getIndexOrNull("Hello World", letter);
        Integer c = index.getIndexOrNull("Hi", letter);
        System.out.println(a); // 1
        System.out.println(b); // 4
        System.out.println(c); // null

        StringManipulation index2 = new StringManipulation();
        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer d = index2.getIndexOrNull(word, subString);
        Integer e = index2.getIndexOrNull(word, notSubString);
        System.out.println(d); // 2
        System.out.println(e); // null

        StringManipulation concatSubstring = new StringManipulation();
        String result = concatSubstring.concatSubstring("Hello", 1, 2, "world");
        System.out.println(result); // eworld

    }
}