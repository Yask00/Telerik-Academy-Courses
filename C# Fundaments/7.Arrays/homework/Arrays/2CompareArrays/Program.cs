using System;


class Compare_arrays
{
    static void Main()
    {

        int inputSize = int.Parse(Console.ReadLine());

        int[] arrayOne = new int[inputSize];
        int[] arrayTwo = new int[inputSize];

        bool isEqual = true;
        //N1
        for (int i = 0; i < arrayOne.Length; i++)
        {
            arrayOne[i] = int.Parse(Console.ReadLine());
        }
        //N2
        for (int i = 0; i < arrayTwo.Length; i++)
        {
            arrayTwo[i] = int.Parse(Console.ReadLine());
        }

        //If theyre equal
        for (int i = 0; i < arrayOne.Length; i++)
        {
            if (arrayOne[i] != arrayTwo[i])
            {
                isEqual = false;
            }
        }

        //Output
        if (isEqual)
        {
            Console.WriteLine("Equal");
        }
        else
        {
            Console.WriteLine("Not equal");
        }
    }

}