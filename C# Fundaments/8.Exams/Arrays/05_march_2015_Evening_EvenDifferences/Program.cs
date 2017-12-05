using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program
{
    static void Main()
    {

        //1 Rread Input
        //2 Put input numbers in array collection
        //3 Iterate over the array and calculate sum
        //3.1 Find absolute difference of current and previous
        //3.2 If even sum sum it
        //3.3 make a jump odd/even
        //4 Print sum

        var sequence = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
        long sum = 0;
        int i = 1;

        while (i < sequence.Length)
        {
            //3.1
            long absDiff = Math.Abs(sequence[i] - sequence[i - 1]);
            //if even
            if (absDiff % 2 == 0)
            {
                //sum abs difference
                sum += absDiff;
                //even jump
                i += 2;
            }
            else // if odd
            {
                //odd jump
                i += 1;
            }
        }




        Console.WriteLine(sum);

    }
}