using System;
using System.IO;

class Text_files_demos
    {
    

    static void Main()
        {

        //var reader = new StreamReader(@"..\..\test.txt");
        //string fileContents = reader.ReadToEnd();
        //Console.WriteLine(fileContents);

        //ReadingTextFiles
        //string fileName = @"..\..\test.txt";
        //Console.WriteLine("The contents of the file {0} is:", fileName);
        //
        //StreamReader streamReader = new StreamReader(fileName);
        //
        //using (streamReader)
        //{
        //    string fileContents = streamReader.ReadToEnd();
        //    Console.WriteLine(fileContents);
        //}
        //
        //Console.WriteLine("\n\nNow line by line:");
        //
        //StreamReader reader = new StreamReader(fileName);
        //using (reader)
        //{
        //    int lineNumber = 0;
        //    string line = reader.ReadLine();
        //    while (line != null)
        //    {
        //        lineNumber++;
        //        Console.WriteLine("Line {0}: {1}", lineNumber, line);
        //        line = reader.ReadLine();
        //    }
        //}


        //StreamWriter numbers
        StreamWriter streamWriter =
    new StreamWriter("numbers.txt");
        using (streamWriter)
        {
            for (int number = 1; number <= 20; number++)
            {
                streamWriter.WriteLine(number);
            }
        }


    }
}

