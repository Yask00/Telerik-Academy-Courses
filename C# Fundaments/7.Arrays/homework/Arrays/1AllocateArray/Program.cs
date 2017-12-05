using System;

class Allocate_Array
{
    static void Main()
    {

        int input = int.Parse(Console.ReadLine());


        int[] Mynumbers = new int[input];


        for (int i = 0; i < input; i++)
        {
            Mynumbers[i] = 5 * i;
            Console.WriteLine(Mynumbers[i]);
        }

    }
}
