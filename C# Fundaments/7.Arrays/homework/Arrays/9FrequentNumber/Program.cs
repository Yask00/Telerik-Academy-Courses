using System;
using System.Globalization;
using System.Linq;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());

            int[] array = new int[count + 1];

            int currentSequence = 1;
            int maxSequence = 1;
            int number = int.MinValue;

            for (int i = 0; i < count; i++)
            {
                array[i] = int.Parse(Console.ReadLine());
            }

            Array.Sort(array);

            for (int i = 0; i < count; i++)
            {
                if (array[i] == array[i + 1])
                {
                    ++currentSequence;
                    maxSequence = Math.Max(maxSequence, currentSequence);

                    if (currentSequence >= maxSequence)
                    {
                        number = array[i];
                    }
                }

                else
                {

                    currentSequence = 1;
                }
            }

            Console.WriteLine("{0} ({1} times)", number, maxSequence);

        }
    }
}