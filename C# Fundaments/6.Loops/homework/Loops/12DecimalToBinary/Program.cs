using System;




class DecimalToBinary
{
    static void Main()
    {

        long input = long.Parse(Console.ReadLine());
        string binary = string.Empty;

        while (input > 0)
        {
            binary += input % 2;
            input = input / 2;
        }
        for (int i = binary.Length - 1; i >= 0; i--)
        {
            Console.Write(binary[i]);
        }
    }
}
