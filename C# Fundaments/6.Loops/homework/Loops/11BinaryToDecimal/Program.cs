using System;



class BinaryToDecimal
{
    static void Main()
    {

        string input = (Console.ReadLine());

        long binary = 0;

        for (int i = 0; i < input.Length; i++)
        {
            if (input[input.Length - i - 1] == '1')
            {
                binary += (long)Math.Pow(2, i);
            }

        }
        Console.WriteLine(binary);

    }
}

