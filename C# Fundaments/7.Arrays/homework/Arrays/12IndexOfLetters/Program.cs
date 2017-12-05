using System;



class Index_of_letters
{
    static void Main()
    {

        string input = Console.ReadLine().ToLower();

        char[] array = new char[26]; //english alphabet length

        for (int i = 0; i < array.Length; i++)
        {
            array[i] = (char)('a' + i);
        }

        foreach (char i in input)
        {
            Console.WriteLine(Array.IndexOf(array, i));
        }

    }
}