/*
Представлена таблица users:
uuid            | name
----------------+----------------
UUID-1          | name-1
UUID-2          | name-2
UUID-3          | name-3
UUID-4          | name-4
UUID-5          | name-5
UUID-...        | name-...
UUID-100000000  | name-100000000
Требуется написать запрос для получения 100 имён после указанного uuid в запросе.
Как это сделать максимально эффективно?
*/

CREATE TABLE users (
    uuid UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

/*
Вообще не легкая задачка, узнал про uuid, узнал про cte, весь гугл облазил
*/
WITH
    cte AS (
        SELECT uuid, name, ROW_NUMBER() OVER (
                ORDER BY uuid
            ) AS row_num
        FROM users
    )
SELECT uuid, name
FROM cte
WHERE
    row_num > (
        SELECT row_num
        FROM cte
        WHERE
            uuid = 'UUID-указанный'
    )
ORDER BY row_num
LIMIT 100;