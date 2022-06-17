SELECT user.first_name, user.user_id , AVG(correct) as avg_correct, MAX(time_taken) as taken_time
        FROM user 
     LEFT JOIN test_result 
        ON user.user_id = test_result.user_id 
     GROUP BY user.user_id;