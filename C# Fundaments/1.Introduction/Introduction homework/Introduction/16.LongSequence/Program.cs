using System;




class PrintLongSequence
{
    static void Main()
    {

        for (int i = 2; i <= 1001; i++)   //loop for i until 1001
        {
            if (i % 2 == 0)  //checks if i is an even number
            {
                Console.WriteLine(i);
            }

            else
            {
                Console.WriteLine(i * (-1));
            }
        }
    }

}
