using System;




class Numbers_from_1_to_N
{
    static void Main()
    {

        int N = int.Parse(Console.ReadLine());

        int start = 0;

        for (int i = 1; i <= N; i++)
        {

            int sequence = start + i;

            Console.Write("{0}" + " ", sequence);
        }
    }
}