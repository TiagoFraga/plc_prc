import csv
import re

ficheiro_read = "dados4code.csv"
ficheiro_write = "dados4json.csv"
codigos = {}
string = "PRC"
valores = 0

with open(ficheiro_read) as csv_file:
    texto = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in texto:
        if line_count == 0:
            line_count += 1
        else:
            line_count += 1
            engine = re.sub(r"\s\s","",row[2])
            code = row[3]
            if code == "":
                code = string + str(valores)
                valores += 1
            value = codigos.get(engine)
            if value:
                if value == code:
                    print("Codigo igual")
                else:
                    print("Codigo diferente: " + str(line_count))
            else:
                codigos[engine] = code

with open(ficheiro_write, mode='w') as file_writer:
    writer = csv.writer(file_writer, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    with open(ficheiro_read) as csv_file:
        texto = csv.reader(csv_file, delimiter=';')
        line_count = 0
        for row in texto:
            if line_count == 0:
            #Escrever as colunas
                writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[20],row[21]])
                line_count += 1
            else:
                line_count += 1
                engine = re.sub(r"\s\s","",row[2])
                code = row[3]
                if code == "":
                    writer.writerow([row[0],row[1],engine,codigos[engine],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[20],row[21]])
                else:
                    writer.writerow([row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12],row[13],row[14],row[15],row[16],row[17],row[18],row[19],row[20],row[21]])

                


