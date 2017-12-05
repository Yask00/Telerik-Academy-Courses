using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Speeds
{
    class Program
    {
        static void Main()
        {

            int n = int.Parse(Console.ReadLine());

           
            int lastSpeed = -1;
            int speed = 0;

            int bestSum = 0;
            int bestLen = 0;

            int currentSum = 0;
            int currentLen = 0;

            bool isFirst = true;
            bool isUpdated = false;


            for (int i = 0; i < n; i++)
            {
                speed = int.Parse(Console.ReadLine());
                isUpdated = false;

                if (isFirst)
                {
                    isFirst = false;
                    lastSpeed = speed;
                    currentLen = 1;
                    currentSum = speed;
                }
                else if (lastSpeed >= speed)
                {
                    lastSpeed = speed;
                    isUpdated = true;

                    if (currentLen > bestLen)
                    {
                        bestSum = currentSum;
                        bestLen = currentLen;
                    }
                    else if (currentLen == bestLen)
                    {
                        bestSum = (bestSum > currentSum) ? bestSum : currentSum;
                    }
                    currentSum = speed;
                    currentLen = 1;
                }
                else
                {
                    ++currentLen;
                    currentSum += speed;
                }
            }


            if (!isUpdated)
            {
                if (currentLen > bestLen)
                {
                    bestSum = currentSum;
                    bestLen = currentLen;
                }
                else if (currentLen == bestLen)
                {
                    bestSum = (bestSum > currentSum) ? bestSum : currentSum;
                }
            }


            Console.WriteLine(bestSum);
        }
    }
}
