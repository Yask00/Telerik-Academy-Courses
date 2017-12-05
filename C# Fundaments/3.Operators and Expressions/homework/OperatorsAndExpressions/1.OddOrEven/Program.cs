using System;



class OddOrEven
{
    static void Main()
    {

        int i = int.Parse(Console.ReadLine());

        if (i % 2 == 0)

        {
            Console.WriteLine("even" + " " + i);
        }

        else
        {
            Console.WriteLine("odd" + " " + i);
        }

    }
}
