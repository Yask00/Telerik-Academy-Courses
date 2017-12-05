using System;




class Compare_char_arrays
{
    static void Main()
    {
        string OneSmaller = "<";
        string TwoSmaller = ">";
        string Equal = "=";


        string first = (Console.ReadLine());
        string second = (Console.ReadLine());
        //Step 1: Equal Length
        if (first.Length < second.Length)
        {
            first = first.PadRight(second.Length, (char)(0));
        }
        else if (first.Length > second.Length)
        {
            second = second.PadRight(first.Length, (char)(0));
        }
        //important to turn them into char
        char[] arrayA = first.ToCharArray();
        char[] arrayB = second.ToCharArray();

        //output
        for (int i = 0; i < arrayA.Length; i++)
        {
            if (arrayA[i] < arrayB[i])
            {
                Console.WriteLine(OneSmaller);
                return;
            }
            else if (arrayA[i] > arrayB[i])
            {
                Console.WriteLine(TwoSmaller);
                return;
            }
        }


        Console.WriteLine(Equal);
    }

}
